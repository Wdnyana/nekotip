import { Actor, HttpAgent } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';

import { BACKEND_CANISTER_ID, DFX_NETWORK } from '@/constant/common';

import { idlFactory } from '../../../declarations/nekotip_backend';
import { _SERVICE } from '../../../declarations/nekotip_backend/nekotip_backend.did';

const useActor = () => {
  let authClient: AuthClient | null = null;

  const createActorInstance = async (): Promise<Actor> => {
    if (!authClient) {
      authClient = await AuthClient.create();
    }

    const identity = authClient.getIdentity();

    const agent = await HttpAgent.create({
      identity,
      shouldFetchRootKey: DFX_NETWORK === 'local',
    });

    return Actor.createActor(idlFactory, {
      agent,
      canisterId: BACKEND_CANISTER_ID,
    });
  };

  const getActor = async () => {
    try {
      const actor = await createActorInstance();
      return actor as unknown as _SERVICE;
    } catch (error) {
      console.error('Error creating actor:', error);
      throw error;
    }
  };

  return { getActor };
};

export default useActor;

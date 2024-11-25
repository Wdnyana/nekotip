import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { nekotip_backend } from '../../declarations/nekotip_backend'

function App() {
  const [searchParams] = useSearchParams();

  const { isAuthenticated, checkSession } = useAuth();
  const { updateReferralCode } = useUser();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  useEffect(() => {
    const referralCode = searchParams.get('referral');
    updateReferralCode(referralCode ?? '');
  }, [searchParams, updateReferralCode]);

  return (
    <main className="text-3xl" onClick={handleGreet}>
      <Button type="button" variant="default">
        Click me!
      </Button>

      <span className="ms-4 text-red-400">{text}</span>
    </main>
  )
}

export default App;

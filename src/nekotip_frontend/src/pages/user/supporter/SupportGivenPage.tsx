/* eslint-disable simple-import-sort/imports */
import React, { useState } from 'react';

import { ArrowRight } from 'lucide-react';

import LayoutDashboard from '@/components/ui/Layout/LayoutDashboard';
import CardSupportGiven from '@/components/features/SupportGiven/CardSupportGiven';
import TabPanel from '@/components/features/SupportGiven/TabPanel';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button/Button';
import TabMessage from '@/components/features/SupportGiven/TabMessage';

import { transactionsText, messages } from '@/store/textSupportGiven';
import TabTransaction from '@/components/features/SupportGiven/TabTransaction';

import SupporterCard from '@/components/features/MySupporter/SupporterCard';

const title = 'card';
const value = '0';
const subtitle = 'lorem ipsum dolor';

const SupportGivenPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LayoutDashboard title="Support Given">
      <h1 className="text-title text-2xl font-semibold lg:text-3xl">
        Support Given
      </h1>

      <div className="w-full space-y-6 p-6">
        <div className="flex items-start justify-between gap-3 md:gap-5">
          <CardSupportGiven title={title} value={value} subtitle={subtitle} />

          <div>
            <h3 className="0 text-sm font-medium">
              Top 3 Supporter - November
            </h3>
            <p className="text-sm text-gray-400">
              You don't have any supporter yet
            </p>
          </div>

          <Link to="/dashboard/supporter">
            <Button className="text-sm hover:shadow-hover">
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <TabPanel
          tabs={[
            {
              label: 'Messages',
              content: isLoading ? (
                <span className="text-lg">Loading...</span>
              ) : messages.length > 0 ? (
                <TabMessage />
              ) : (
                <span className="text-lg">
                  You don't have any supporter yet
                </span>
              ),
            },
            {
              label: 'Transactions',
              content: isLoading ? (
                <span className="text-lg">Loading...</span>
              ) : transactionsText.length > 0 ? (
                <TabTransaction transactionsText={transactionsText} />
              ) : (
                <span className="text-lg">
                  You don't have any supporter yet
                </span>
              ),
            },
          ]}
        />
      </div>
    </LayoutDashboard>
  );
};

export default SupportGivenPage;

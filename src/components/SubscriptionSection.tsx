import React, { useState } from 'react';
import { FaReceipt, FaMoneyBillWave, FaRegClock } from 'react-icons/fa';
import { Pencil } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  weeklyPrice: string;
  features: string[];
}

interface SubscriptionSectionProps {
  currentPlan?: string;
  planCost?: string;
  renewalDate?: string;
  onChangePlan?: (planId: string) => void;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'rookie',
    name: 'Rookie Plan',
    price: 'FREE',
    weeklyPrice: 'Rp0 / Week',
    features: ['Limited product access', '3x Skin Analysis/month', 'No Outfit Simulation']
  },
  {
    id: 'muse',
    name: 'Muse Plan',
    price: 'Rp99.000',
    weeklyPrice: 'Rp24.750 / Week',
    features: ['Full catalog access', 'Daily Outfit Simulations', 'AI-based product tips']
  },
  {
    id: 'iconic',
    name: 'Iconic Plan',
    price: 'Rp169.000',
    weeklyPrice: 'Rp42.250 / Week',
    features: ['2 expert consults/month', 'Body Fit & Lookbook', 'Member deals']
  }
];

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  currentPlan = 'Iconic Plan',
  planCost = 'Rp169.000',
  renewalDate = 'Dec 25, 2025',
  onChangePlan
}) => {
  const [showChangePlan, setShowChangePlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [activePlan, setActivePlan] = useState<string>(currentPlan);
  const [currentCost, setCurrentCost] = useState<string>(planCost);

  const handlePlanSelect = (planId: string) => {
    const plan = subscriptionPlans.find((p) => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
    }
  };

  const confirmChangePlan = () => {
    if (selectedPlan) {
      setActivePlan(selectedPlan.name);
      setCurrentCost(selectedPlan.price);
      onChangePlan?.(selectedPlan.id);
      setSelectedPlan(null);
      setShowChangePlan(false);
    }
  };

  return (
    <section
        className={`bg-white shadow-md border relative flex flex-col items-stretch w-full max-w-[1362px] mt-[45px] pt-[15px] pb-[45px] px-[52px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid transition-all duration-700 ease-in-out overflow-hidden ${
          showChangePlan ? 'max-h-[1600px]' : 'max-h-[600px]'
        }`}
        aria-label="Subscription information"
      >
      <header className="text-tertiary text-[40px] font-normal font-hanuman text-center">
        <h2>Subscription</h2>
      </header>

      <button
        onClick={() => setShowChangePlan(true)}
        className="absolute z-10 flex w-[200px] text-lg text-white font-bold h-[50px] right-[52px] top-5 hover:opacity-90 transition-opacity"
        aria-label="Change subscription plan"
      >
        <div className="bg-tertiary flex items-center gap-2 px-[18px] py-2.5 rounded-full text-white">
          <Pencil size={20} />
          <span>Change Plan</span>
        </div>
      </button>

      <div className="flex justify-center flex-wrap gap-[50px] mt-[40px]">
        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow border flex gap-4 items-center px-5 py-4 rounded-[40px]">
            <FaReceipt className="text-2xl text-tertiary" />
            <div>
              <div className="text-sm text-tertiary font-medium font-manrope">Subscription</div>
              <div className="text-xl font-bold text-tertiary font-manrope">{activePlan}</div>
            </div>
          </div>
        </article>

        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow border flex gap-4 items-center px-5 py-4 rounded-[40px]">
            <FaMoneyBillWave className="text-2xl text-tertiary" />
            <div>
              <div className="text-sm text-tertiary font-medium font-manrope">Plan Cost</div>
              <div className="text-xl font-bold text-tertiary font-manrope">{currentCost}</div>
            </div>
          </div>
        </article>

        <article className="min-w-60 w-[300px]">
          <div className="bg-white shadow border flex gap-4 items-center px-5 py-4 rounded-[40px]">
            <FaRegClock className="text-2xl text-tertiary" />
            <div>
              <div className="text-sm text-tertiary font-medium font-manrope">Renewal Date</div>
              <div className="text-xl font-bold text-tertiary font-manrope">{renewalDate}</div>
            </div>
          </div>
        </article>
      </div>

      {showChangePlan && (
        <div className="z-0 flex min-h-[450px] w-full items-center gap-10 text-tertiary font-normal justify-center flex-wrap mt-[30px]">
          {subscriptionPlans.map((plan) => (
            <article
              key={plan.id}
              className="bg-white shadow-md border flex flex-col w-[330px] pt-5 pb-8 px-4 rounded-[20px]"
            >
              <h3 className="text-2xl font-semibold mb-2 font-manrope">{plan.name}</h3>
              <div className="text-3xl font-extrabold font-manrope">{plan.price}</div>
              <div className="text-tertiary text-[18px] font-manrope">{plan.weeklyPrice}</div>
              <hr className="my-5 border-gray-300" />
              <ul className="text-lg list-disc list-inside space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {plan.name === activePlan ? (
                <div className="mt-6 bg-[rgba(231,231,231,1)] shadow border font-manrope text-lg font-bold px-4 py-3 rounded-full text-center cursor-default">
                  My Subscription
                </div>
              ) : (
                <button
                  onClick={() => handlePlanSelect(plan.id)}
                  className="mt-6 bg-cream shadow border text-lg font-bold font-manrope px-4 py-3 rounded-full hover:bg-[rgba(241,225,199,0.9)] transition"
                >
                  Change Subscription
                </button>
              )}
            </article>
          ))}
        </div>
      )}

      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 text-tertiary">Confirm Plan Change</h3>
            <p className="mb-4 text-gray-600">
              Are you sure you want to change to <strong>{selectedPlan.name}</strong>?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmChangePlan}
                className="flex-1 px-4 py-2 bg-primary text-white rounded hover:bg-[rgba(116,75,40,0.9)]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  weeklyPrice: string;
  features: string[];
}

export const subscriptionPlans: SubscriptionPlan[] = [
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

export function getPlanById(id: string) {
  return subscriptionPlans.find(plan => plan.id === id);
}

import { useTranslation } from 'react-i18next';

export const useProfileScreen = () => {
  const { t } = useTranslation();

  return {
    t,
  };
};

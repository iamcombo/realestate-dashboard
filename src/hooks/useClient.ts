import { useEffect, useState } from 'react';

const useClient = () => {
  const [mounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mounted;
};

export default useClient;

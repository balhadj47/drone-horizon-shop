
export const useAddressParser = () => {
  const parseAddress = (address: string | null) => {
    if (!address) return { street: '', city: '', state: '', postalCode: '', country: '' };
    
    try {
      const parsed = JSON.parse(address);
      return {
        street: parsed.street || '',
        city: parsed.city || '',
        state: parsed.state || '',
        postalCode: parsed.postalCode || '',
        country: parsed.country || ''
      };
    } catch {
      return { street: address, city: '', state: '', postalCode: '', country: '' };
    }
  };

  return { parseAddress };
};

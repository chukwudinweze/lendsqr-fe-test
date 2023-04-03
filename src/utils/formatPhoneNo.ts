export const formatPhoneNo = (phone: string) => {
  const phoneNumber = phone;
  const formattedPhoneNumber = phoneNumber
    .replace(/-/g, "")
    .replace(/ x\d+/g, "");

  return formattedPhoneNumber;
};

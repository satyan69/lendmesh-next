export default function BankDetailsPage({
  params,
}: {
  params: { bankName: string };
}) {
  const { bankName } = params;

  return (
    <div>
      <h1>Bank Details for {bankName}</h1>
      {/* Add your bank details component here */}
    </div>
  );
}
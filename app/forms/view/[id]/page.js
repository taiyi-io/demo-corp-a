import Link from 'next/link';

const pseudoData = {
  customer: "lisi",
  amount: 1500000,
  bank: 'bank_b',
  minimum_asset: 1000000,
  invoker: 'atom',
  result: false,
  verify_mode: 'contract',
  verifier: 'bob',
  status: 2,
  create_time: '2022-12-18 11:00:05',
  invoke_time: '2022-12-21 19:41:00',
  verify_time: '2022-12-21 19:43:07'
};


async function getData(id) {
  //todo: parse pagination parameters from query
  return {
    id: id,
    ...pseudoData,
  };
}


export default async function Page({ params }){
  const formID = params.id;
  const data = await getData(formID);
  const {id, customer, amount, bank, verify_mode, result,
   status, invoke_time, verify_time} = data;
   return (
     <div>
      <Link href='/forms'>Back</Link>
      <div>ID: {id}</div>
      <div>Customer: {customer}</div>
      <div>Amount: {amount}</div>
      <div>Bank: {bank}</div>
      <div>Verify_mode: {verify_mode}</div>
     </div>
   )
}

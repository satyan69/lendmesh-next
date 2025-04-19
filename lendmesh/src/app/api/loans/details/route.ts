// import { metadata } from '@/app/not-found'
import { NextResponse } from 'next/server'

const BASE_URL = 'https://fetch-loan-data-26212115864.us-central1.run.app/api/v1/details'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  // console.log('searchParams', searchParams)
  const loanType = searchParams.get('loanType')
  const creditUnionId = searchParams.get('creditUnionId')
  const product = searchParams.getAll('product');

  if (!loanType || !creditUnionId) {
    return NextResponse.json({ error: 'Missing required loanType parameter' }, { status: 400 })
  }

  let financeType = searchParams.get('financeType');
  
  const defaultFinance = {
    "vehicle_loans": "new",
    "mortgage_loans": "purchase",
    "student_loans": "new",
    "home_equity_loans": "equity",
    "personal_loans": "personal"
  };
  
  if (!financeType && loanType) {
    financeType = defaultFinance[loanType] || "";
  }

  let url = `${BASE_URL}/${loanType}/${creditUnionId}`

  const params = new URLSearchParams()

  if (financeType) params.append('finance_type', financeType)
  if (product?.length) params.append('product', product?.join(','))


  if (params.toString()) {
    url += `?${params.toString()}`
  }

  // console.log('Fetching loan data:', url)

  try {
    const response = await fetch(url)
    const data = await response.json()
    // console.log('data', data)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch loan data' }, { status: 500 })
  }
}
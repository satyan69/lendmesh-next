import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const loanType = searchParams.get('loanType') || '';
  const zip = searchParams.get('zip') || '';
  const creditScore = Number(searchParams.get('creditScore')) || 780;
  const sortBy = searchParams.get('sortBy') || 'APR';
  const sortType = searchParams.get('sortType') || 'asc';
  const page = Number(searchParams.get('page')) || 1;

  // Call your external API
  const url = 'https://fetch-loan-data-26212115864.us-central1.run.app/api/v1/initial';
  const updatedurl = `${url}/${loanType}`;
console.log('updatedurl', updatedurl)
  try {
    const response = await fetch(`${updatedurl}?zipCode=${zip}&creditScore=${creditScore}&sortBy=${sortBy}&sortType=${sortType}&page=${page}`)
    const data = await response.json()
    // console.log('Fetched loan data:', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching loan data:', error)
    return NextResponse.json({ error: 'Failed to fetch loan data' }, { status: 500 })
  }
}
export const revalidate = 60; //тут можно установить как часто будет обновляться кэш

import { NextResponse } from 'next/server';

import { dates } from '../DB';

export async function GET() {
    return NextResponse.json(dates);
}
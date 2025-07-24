export const revalidate = 60; //тут можно установить как часто будет обновляться кэш

import { NextResponse } from 'next/server';
import DB from '../DB';

export async function GET() {
    return NextResponse.json(DB);
}
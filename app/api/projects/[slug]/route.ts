import { NextResponse } from 'next/server';
import { projects } from '@/data/projects';

export const dynamic = 'force-dynamic';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_request: Request, { params }: any) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(project);
}

export type TestType = 'CLASSIC' | 'SERVER_SIDE' | 'MVT';

export type TestStatus = 'DRAFT' | 'ONLINE' | 'PAUSED' | 'STOPPED';

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: TestType;
  status: TestStatus;
  siteId: number;
}
import Client from './client';
import { urls } from './urls';

export const apiGetVaccinateCountry = ()=>Client.get(urls.dashboard.vaccinateColombia);
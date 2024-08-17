import { AxiosInstance } from 'axios';
import axiosInstance from '@helpers/axios-instance';
import { Data } from '@models/data';

class DataService {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async loadData(): Promise<Data | null> {
    try {
      const axiosResponse = await this.axios.get('../../data.json'); // will load from remote in production
      const response: Data = {
        projects: axiosResponse.data.projects,
      };
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataService(axiosInstance);

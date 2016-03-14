import { BaseApi } from './base';
import { http } from '../utils/http';

/**
 * @class StripeApi
 * @extends BaseApi
 */
export class StripeApi extends BaseApi {

    getAccount() {
        const url = this.getFullURL('stripe', 'account');
        return this.validateAuthHeaders().then((headers) => {
            return http('GET', url, {}, headers);
        });
    }

}

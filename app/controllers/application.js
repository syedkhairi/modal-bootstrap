import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @service modalsManager;

    @action
    async showModal() {
        try {
            let modal = await this.modalsManager.confirm({
                size: 'md',
                position: 'top',
                title: 'Are you sure?'
            });
        } catch (error) {
            console.log(error)
        }  
    }
}

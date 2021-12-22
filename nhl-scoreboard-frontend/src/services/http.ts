import { LitElement } from 'lit';
import { bootstrap } from '../styles';

type Constructor<T = {}> = new (...args: any[]) => T;

export const HttpMixin = <T extends Constructor<LitElement>>(superClass: T) => {
    class HttpMixinClass extends superClass {
        static styles = [bootstrap];

        getTheThing() {
            console.log('get the thing');
        }
    }
    return HttpMixinClass as T;
};

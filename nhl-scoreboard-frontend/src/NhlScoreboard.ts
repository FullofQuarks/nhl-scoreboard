import { html, LitElement } from 'lit';
import { HttpMixin } from './services/http';
import { bootstrap } from './styles';

export class NhlScoreboard extends HttpMixin(LitElement) {
    static styles = [bootstrap];

    render() {
        return html`<button class="btn btn-blue">Testing Bootstrap</button>`;
    }
}

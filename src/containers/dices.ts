import {Component} from '@angular/core';
import {DicesDiceComponent} from '../components/dice';
import {IAppState} from '../app-state';
import {NgRedux} from 'ng2-redux';

@Component({
    selector: 'dices',
    directives: [DicesDiceComponent],
    template: `
        <dice *ngFor="let diceValue of correctDices" value="{{diceValue}}"></dice>
    `,
    styles: [require('./dices.css')]
})
export class DicesComponent {
    private correctDices = [];

    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.select(n => n.dices.getIn(['results', 'correctDices']))
            .subscribe((correctDices: Array<Number>) => { this.correctDices = correctDices; });
    }
}

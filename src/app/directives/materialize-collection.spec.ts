import {beforeEachProviders,TestComponentBuilder,injectAsync,ComponentFixture} from 'angular2/testing';
import {Component,ViewChildren,QueryList} from 'angular2/core';
import {MaterializeCollection} from './materialize-collection';

describe('Directive: MaterializeCollection', () => {
    let fixture:ComponentFixture;

    beforeEachProviders(() => [TestComponentBuilder]);

    beforeEach(injectAsync([TestComponentBuilder], tcb => {
        return tcb
            .createAsync(Container)
            .then((f:ComponentFixture) => {
                f.detectChanges();
                fixture = f;
            });
    }));

    it('Initialization should be ok', () => {
        expect(fixture).toBeDefined();
    });

    it('Click event should add active class', () => {
        let directive:MaterializeCollection = fixture.componentInstance.children.first;
        expect(directive).toBeDefined();
        $(directive.el.nativeElement).click();
        expect($(directive.el.nativeElement).find('li.active').length).toBe(0);
    });
});

@Component({
    selector: 'container',
    template: `<ul materialize-collection><li class="active"></li></ul>`,
    directives: [MaterializeCollection]
})
export class Container {
    @ViewChildren(MaterializeCollection) children:QueryList<MaterializeCollection>;
}

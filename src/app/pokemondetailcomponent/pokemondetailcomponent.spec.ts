import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemondetailcomponent } from './pokemondetailcomponent';

describe('Pokemondetailcomponent', () => {
  let component: Pokemondetailcomponent;
  let fixture: ComponentFixture<Pokemondetailcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokemondetailcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokemondetailcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

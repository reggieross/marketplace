import React, { useCallback } from 'react';
import { mount } from 'enzyme';
import { ProductCard } from './ProductCard';
import { Price, Product } from '../../../../../types/dataTypes';
import CatalogService from '../../../../../Service/CatalogService';
import { Card } from '../../../../base_components/Card/Card';
import { Portal } from '@material-ui/core';

describe('Product Card', () => {
  describe('Liking product Behaviour', () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it('Should Submit a request to like product when a user click the like product button', () => {
      const spy = jest.spyOn(CatalogService, 'likeProduct');
      const product: Product = {
        id: 'some-id',
        name: 'some-name',
        prices: [],
      };
      const component = mount(<ProductCard product={product} />);
      component
        .find("[aria-label='like-icon']")
        .at(0)
        .simulate('click');
      expect(spy).toBeCalled();
      expect(spy).toBeCalledWith('some-id', true);
    });

    it('Should submit and unlike request if user clicks the unlike product button', () => {
      const spy = jest.spyOn(CatalogService, 'likeProduct');
      const product: Product = {
        id: 'some-id',
        name: 'some-name',
        prices: [],
        isLiked: true,
      };
      const component = mount(<ProductCard product={product} />);
      component
        .find("[aria-label='unlike-icon']")
        .at(0)
        .simulate('click');
      expect(spy).toBeCalled();
      expect(spy).toBeCalledWith('some-id', false);
    });
  });

  describe('Price Modal', () => {
    it('Should display modal when user click on card', () => {
      const product: Product = {
        id: 'some-id',
        name: 'some-name',
        prices: [],
        isLiked: true,
      };
      const component = mount(<ProductCard product={product} />);
      expect(component.find(Portal).exists()).toBeFalsy();
      component.find(Card).simulate('click');
      expect(component.find(Portal).exists()).toBeTruthy();
    });
  });
});

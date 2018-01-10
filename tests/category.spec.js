/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../server/db')
const Category = db.model('category')

var category;
beforeEach(function(){
  category = Category.build({
    type: 'size',
    name: 'S'
  });
});

describe('Category Model : attributes definition', function(){

      it('includes `size` and `name` fields', function () {

        return category.save()
        .then(function (savedcategory) {
          expect(savedcategory.type).to.equal('size');
          expect(savedcategory.name).to.equal('S');
        });

      });
      });



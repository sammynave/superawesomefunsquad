import Ember from 'ember';

function textChange(delta, source) {
  var html = this.get('editor').getHTML();
  this.set('value', html);
}

function selectionChange(range){
  this.$().toggleClass('focus', !Ember.isEmpty(range));
}

export default Ember.Component.extend({
  willInsertElement(){
    const editor = new Quill(this.$('.editor')[0], {
      modules: {
        'toolbar': { container: this.$('.toolbar')[0] },
        'image-tooltip': true,
        'link-tooltip': true
      },
      theme: 'snow'
    });

    editor.on('text-change', textChange.bind(this));
    editor.on('selection-change', selectionChange.bind(this));
    this.set('editor', editor);
  },

  willDestroyElement: function() {
    const editor = this.get('editor');

    Quill.editors = Quill.editors.filter(function(el) {
      return el.id !== editor.id;
    });
    clearInterval(editor.editor.timer);
    this.set('editor', null);
  },
  classNames: ['col-xs-12'],
});

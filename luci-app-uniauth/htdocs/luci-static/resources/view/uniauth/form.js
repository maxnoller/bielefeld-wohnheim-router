'use strict';
'require view';
'require form';

return view.extend({
  render: function() {
    var m, s, o;

    m = new form.Map('uniauth', _('Credentials'),
         _('Please enter your credentials for HSBI/Uni here.'));

    s = m.section(form.TypedSection, 'credentials', _('Credentials'));
    s.anonymous = true;
    o = s.option(form.Value, "username", _("Username"), _("Your username/email you use for eduroam"));
    o.rmempty = false
    o = s.option(form.Value, "password", _("Password"), _("Your password you use for eduroam"));
    o.rmempty = false

    return m.render();
  },
});

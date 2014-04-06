from __future__ import unicode_literals

from django import forms
from django.utils.safestring import mark_safe
from django.utils.encoding import force_text
from django.forms.util import flatatt


class AlohaWidget(forms.Widget):
    def __init__(self, attrs=None):
        default_attrs = {}
        if attrs:
            default_attrs.update(attrs)
        super(AlohaWidget, self).__init__(default_attrs)

    def render(self, name, value, attrs=None):
        if value is None:
            value = ''
        final_attrs = self.build_attrs(attrs, name=name)
        return mark_safe('<div class="aloha-edit span8" data-id="%s" id="aloha-%s">%s</div><input type="hidden"%s />'
                         % (final_attrs['id'], final_attrs['id'], force_text(value), flatatt(final_attrs)))

    class Media:
        css = {'all': ('aloha/css/aloha.css','aloha-settings.css)}
        js = ('aloha/lib/require.js',
              'aloha/lib/vendor/jquery-1.7.2.js',
              'js/aloha-settings.js',
              'aloha/lib/aloha.js',
              'js/init_aloha_form.js')

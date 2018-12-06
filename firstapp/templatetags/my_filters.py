from django import template

register = template.Library()

@register.inclusion_tag('block/navbar.html')
def show_navbar(section):
    return {'section': section}
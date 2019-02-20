export function mergeWith(
  proto, props, prop = 'groups'
) {
  return {
    ...proto,
    ...props,
    ...{ [prop]: [...proto[prop] || [], ...props[prop] || []] }
  }
}

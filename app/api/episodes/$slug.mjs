export async function get(req) {
  const {slug} = req.params
  return {
    json: {
      slug,
    }
  }
}

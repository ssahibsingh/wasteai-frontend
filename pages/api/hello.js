// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      website: 'WasteAI.co',
      status: 'Active',
      developer: 'Sahib Singh',
      developer_github: 'https://github.com/ssahibsingh',
      developer_contact: 'https://ssahibsingh.github.io/#contact',
    }
  )
}

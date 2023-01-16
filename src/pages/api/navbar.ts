import type { NextApiRequest, NextApiResponse } from 'next'

const jsonData = {
    lista: [
      {
        card_list: [],
        pays_transfer: [
          {
            between_cards: [],
            banks: [{ change_pass: [] }],
            credit_card: [],
          },
        ],
        support: [
          {
            lock: [],
            change_pass: [],
          },
        ],
        enterprises: [],
      },
    ],
  };


  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res.status(200).json(jsonData)
  }
  

export const urls = [
  '/uploads/maxresdefault_1_0cda104e49.jpeg',
  '/uploads/maxresdefault_2_3072271808.jpeg',
  '/uploads/images_f324307a7f.jpeg',
  '/uploads/maxresdefault_164e1c974c.jpeg',
  '/uploads/maxresdefault_1_5bef2a2c64.jpeg',
  '/uploads/3_29_4b376917c9.jpeg',
  '/uploads/maxresdefault_2_4747cae75c.jpeg',
  '/uploads/maxresdefault_c1369083db.jpeg',
  '/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg',
  '/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg',
  '/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg',
  //
  '/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
  '/uploads/taqwacore2_2f487d2e74.jpeg',
  '/uploads/1_6a9e0669ca.jpeg',
  '/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg',
  '/uploads/content_Mountain_Movie_201caecdbf.jpeg',
  '/uploads/drib_1_1200x630_61aeb78757.jpeg',
];

export const getUrl = count => {
  return Array.from({ length: count }, (_, v) => ({
      name: `33 слова movie ${v} - ${count}`,
      duration: Date.now(),
      img: `https://api.nomoreparties.co/${urls[v]}`,
      isSaved: Math.round(Math.random())
    }));
};
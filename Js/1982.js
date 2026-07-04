
const teksJepang = "着物は日本の伝統的な民族衣装で、T字型の直線裁ちの着物地を縫い合わせて作られます。現代では日常的に着ることは少なくなりましたが、結婚式、成人式、お茶会などの特別な儀式や公式な行事で着用され、日本の文化と美意識を象徴する重要な役割を果たしています。";
const teksIndonesia = "Kimono adalah pakaian tradisional Jepang yang dibuat dengan menjahit potongan kain lurus berbentuk huruf T. Meskipun saat ini jarang dipakai sehari-hari, kimono dikenakan pada upacara khusus seperti pernikahan, upacara kedewasaan, dan pesta minum teh, serta memainkan peran penting dalam melambangkan budaya dan estetika Jepang.";

const deskripsi = document.getElementById("deskripsi");
const tombol = document.getElementById("btnTranslate");

let sudahDiterjemahkan = false;

tombol.addEventListener("click", () => {
  if (!sudahDiterjemahkan) {
    deskripsi.textContent = teksIndonesia;
    deskripsi.lang = "id";
    tombol.textContent = "Lihat Bahasa Jepang";
  } else {
    deskripsi.textContent = teksJepang;
    deskripsi.lang = "ja";
    tombol.textContent = "Translate";
  }
  sudahDiterjemahkan = !sudahDiterjemahkan;
});

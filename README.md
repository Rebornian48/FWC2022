# Dokumentasi FIFA World Cup 2022 Matches and Group Standings

Dirilis di https://rebornian48.github.io/FWC2022/

Dokumentasi ini ditulis dengan menggunakan bahasa Indonesia.

Icon/gambar bendera diambil dari https://countryflagsapi.com/.

Untuk data pertandingan selengkapnya diambil dari https://worldcupjson.net/matches, sedangkan data tim yang ada dalam grup diambil dari https://worldcupjson.net/teams
Di sini pertandingan dipisah dengan menggunakan filter yang dapat dilihat pada <i>sample</i> di bawah ini:

<pre>
data = data.filter(function(data){
  return (data.status!=='completed');
});
</pre>

Potongan kode di atas menunjukkan bahwa data yang diambil merupakan pertandingan yang belum selesai (baik sedang berlangsung maupun belum dimulai)

<pre>
var d = new Date(data[i].datetime);
var monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var dateFormatted =  d.getDate() + ' ' + monthArray[d.getMonth()] + ' ' + d.getFullYear();
</pre>

Potongan kode di atas membuat data tanggal dan waktu yang diambil dari format Zulu Time (yyyy-mm-ddThh:MM:ssZ) diubah menjadi sesuai dengan keinginan kita, dalam contoh ini menjadi dd mmm yyyy

<pre>
ab.sort((a,b) => {
    let o1 = a.group_points;
    let o2 = b.group_points;
    
    let n1 = a.goal_differential;
    let n2 = b.goal_differential;

    if(o1 < o2) return 1;
    if(o1 > o2) return -1;
    if(n1 < n2) return 1;
    if(n1 > n2) return -1;

    return 0;
});
</pre>

Potongan kode di atas digunakan untuk melakukan <i>sorting</i> dengan mengurutkan poin serta selisih gol (jika poin sama, maka selisih gol akan dicek) dan diurutkan dari poin dan/atau selisih gol tertinggi ke terendah
function szamol() {
    var letszam = document.getFlementById("letszam").value;
    var ejszaka = document.getFlementById("ejszaka").value;
    var orszag = document.getFlementById("orszag").value;
    var fizetendo;
    var ar = {};
    ar["b"] = 5600;
    ar["g"] = 6200;
    ar["h"] = 5000;
    ar["t"] = 5800;

    //--számolás--
      fizetendo = letszam * ejszaka * ar[orszag];

    //------------
    document.getElementById('eredmeny').value = fizetendo.toLocaleString()+" Ft";
    
}
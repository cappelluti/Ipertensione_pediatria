$(document).on('pageinit','#home' ,function () {
    //Ricavo data attuale
    var d = new Date();
    giorno = d.getDate();
    mese = d.getMonth();
    anno = d.getFullYear();    
    //Preparo la lista dei mesi (tenendo selezionato il mese attuale)
    lista_mesi=new Array("Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre");
    for (i=0;i<12;i++){
        $("#mese").append("<option value="+i+">"+lista_mesi[i]+"</option>");
    }
    $("#mese option[value="+mese+"]").prop("selected", "selected");
    $("#mese").selectmenu("refresh", true);
    
    //Preparo la lista degli anni
    for (i=anno-20;i<anno+1;i++){
        $("#anno").append("<option>"+i+"</option>");
    }
    $("#anno option[value=0]").prop("selected", "selected");
    $("#anno").selectmenu("refresh", true);
});
function controlla(){
    testo_output="";    
    sesso=$("input:radio[name='sesso']:checked").val();
    altezza=$("#altezza").val();    
    PAS=$("#PAS").val();
    PAD=$("#PAD").val();
    mese_nascita=$("#mese").find(":selected").val();
    anno_nascita=$("#anno").find(":selected").val();
    eta_mesi=((anno-anno_nascita)*12)+(mese-mese_nascita)-0.5;    
    if ((altezza=="")||(isNaN(altezza))||(parseInt(altezza)<10)||(altezza>220)){
       testo_output = testo_output+"<p class='errore'>Altezza non valida</p>";
    }
    if ((PAS=="")||(isNaN(PAS))||(parseInt(PAS)<30)||(parseInt(PAS)>200)){
       testo_output = testo_output+"<p class='errore'>Pressione sistolica non valida</p>";
    }
    if ((PAD=="")||(isNaN(PAD))||(parseInt(PAD)<30)||(parseInt(PAD)>200)){
        testo_output = testo_output+"<p class='errore'>Pressione diastolica non valida</p>";
    }
    if (eta_mesi<0.5) {
        testo_output = testo_output+"<p class='errore'>Età non valida</p>";
    }
    if (eta_mesi==240.5){
        eta_mesi=240;
    }
    if (eta_mesi>240.5){
        testo_output = testo_output+"<p class='errore'>Il modello non è valido per età superiori ai 20 anni</p>";
    }    
    if (testo_output!=""){
        output(testo_output);
    } else{
        calcola();
    }
}
function calcola(){
    variabile_mese=0;
    if (mese<mese_nascita){
        variabile_mese=1;
    }
    eta_anni=anno-anno_nascita-variabile_mese;    
    LMS();
    Z_altezza=(Math.pow(altezza/M,L)-1)/(L*S);    
    PAS_variabili();
    PAD_variabili(); 
    PAS_mu=PAS_alfa
        +(PAS_beta1*(eta_anni-10))
        +(PAS_beta2*(Math.pow(eta_anni-10,2)))
        +(PAS_beta3*(Math.pow(eta_anni-10,3)))
        +(PAS_beta4*(Math.pow(eta_anni-10,4)))
        +(PAS_gamma1*Z_altezza)
        +(PAS_gamma2*(Math.pow(Z_altezza,2)))
        +(PAS_gamma3*(Math.pow(Z_altezza,3)))
        +(PAS_gamma4*(Math.pow(Z_altezza,4)));    
    PAD_mu=PAD_alfa
        +(PAD_beta1*(eta_anni-10))
        +(PAD_beta2*(Math.pow(eta_anni-10,2)))
        +(PAD_beta3*(Math.pow(eta_anni-10,3)))
        +(PAD_beta4*(Math.pow(eta_anni-10,4)))
        +(PAD_gamma1*Z_altezza)
        +(PAD_gamma2*(Math.pow(Z_altezza,2)))
        +(PAD_gamma3*(Math.pow(Z_altezza,3)))
        +(PAD_gamma4*(Math.pow(Z_altezza,4)));
        
    Z_PAS=(PAS-PAS_mu)/PAS_sigma;    
    Z_PAD=(PAD-PAD_mu)/PAD_sigma;    
    percentile_PAS=Math.round(calc_percentile(Z_PAS)*1000)/10;
    percentile_PAD=Math.round(calc_percentile(Z_PAD)*1000)/10;    
    //Calcolo la soglia di pressione del 99° percentile + 5mmHg
    soglia_PAS_99=PAS_mu+Z_inv_99*PAS_sigma+5;
    soglia_PAD_99=PAD_mu+Z_inv_99*PAD_sigma+5;    
    // Risultati sistolica
    if (PAS>soglia_PAS_99){
        classificazione_PAS=4;
        risultato_PAS="&gt;99° percentile + 5 mmHg";
    } else if ((percentile_PAS>94.9)&(PAS<soglia_PAS_99)){
        classificazione_PAS=3;
        risultato_PAS="&gt;95° percentile e &lt;99° percentile + 5 mmHg";
    } else if ((percentile_PAS>89.9)&(percentile_PAS<95)){
        classificazione_PAS=2;
        risultato_PAS="&gt;90° percentile e &lt;95° percentile";
    } else{
        classificazione_PAS=1;
        risultato_PAS="&lt;90° percentile";
        if (PAS>120){
            classificazione_PAS=2;
            risultato_PAS=risultato_PAS+" (&gt;120 mmHg)";
        }
    }    
    // Risultati diastolica
    if (PAD>soglia_PAD_99){
        classificazione_PAD=4;
        risultato_PAD="&gt;99° percentile + 5 mmHg";
    } else if ((percentile_PAD>94.9)&(PAD<soglia_PAD_99)){
        classificazione_PAD=3;
        risultato_PAD="&gt;95° percentile e &lt;99° percentile + 5 mmHg";
    } else if ((percentile_PAD>89.9)&(percentile_PAD<95)){
        classificazione_PAD=2;
        risultato_PAD="&gt;90° percentile e &lt;95° percentile";
    } else{
        classificazione_PAD=1;
        risultato_PAD="&lt;90° percentile";
        if (PAD>80){
            classificazione_PAD=2;
            risultato_PAD=risultato_PAD+" (&gt;80 mmHg)";
        }
    }
    if (classificazione_PAS>classificazione_PAD){
        classificazione=classificazione_PAS;
    } else {
        classificazione=classificazione_PAD;
    }
    risultato_eta=eta_anni+" anni"
    if (eta_anni<2) {
        if (eta_mesi<12){
            eta_mesi=eta_mesi-0.5;
            risultato_eta=eta_mesi+" mesi";
        }        
    }
    if (eta_anni==1) {
        risultato_eta=eta_anni+" anno";
    }
    if (risultato_eta=="1 mesi") {
        risultato_eta="1 mese";
    }    
    testo_output=testo_output+"<h3>Et&#224;</h3>"    
    testo_output=testo_output+"<p>"+risultato_eta+"</p>";
    testo_output=testo_output+"<h3>Pressione sistolica</h3>"    
    testo_output=testo_output+"<p class=enfasi>"+risultato_PAS+"</p>";
    testo_output=testo_output+"<h3>Pressione diastolica</h3>"    
    testo_output=testo_output+"<p class=enfasi>"+risultato_PAD+"</p>";    
    if (classificazione==1){
        classificazione_ipertensione="Normale";
        frequenza_misurazioni="A tutti i controlli clinici";
        terapia_comportamentale="Dieta, sonno, attivit&#224; fisica";
        terapia_farmacologica="-";
    } else if (classificazione==2){
        classificazione_ipertensione="Pre-ipertenzione";
        frequenza_misurazioni="Ogni 6 mesi";
        terapia_comportamentale="Controllo peso: se sovrappeso attivit&#224; fisica e dieta";
        terapia_farmacologica="Nulla in assenza di nefropatia cronica, diabete mellito, scompenso cardiaco, ipertrofia ventricolo sinistro"; 
    } else if (classificazione==3){
        classificazione_ipertensione="Ipertensione di I grado";
        frequenza_misurazioni="Ricontrollo dopo 1-2 settimane o prima se sistematico. Se elevato in altre 2 occasioni controllo con attenzione dopo un mese";
        terapia_comportamentale="Controllo peso: se sovrappeso attivit&#224; fisica e dieta";
        terapia_farmacologica="Terapia se condizioni di rischio";
    } else if (classificazione==4){
        classificazione_ipertensione="Ipertensione di II grado";
        frequenza_misurazioni="Valutare o inviare a un centro specializzato entro 1 settimana o subito se paziente sintomatico";
        terapia_comportamentale="Controllo peso: se sovrappeso attivit&#224; fisica e dieta";
        terapia_farmacologica="Iniziare terapia";
    }    
    testo_output=testo_output+"<h3>Classificazione ipertensione</h3>";   
    testo_output=testo_output+"<p>"+classificazione_ipertensione+"</p>";
    testo_output=testo_output+"<h3>Frequenza misurazioni</h3>";
    testo_output=testo_output+"<p>"+frequenza_misurazioni+"</p>";
    testo_output=testo_output+"<h3>Terapia comportamentale</h3>";
    testo_output=testo_output+"<p>"+terapia_comportamentale+"</p>";
    testo_output=testo_output+"<h3>Terapia farmacologica</h3>";
    testo_output=testo_output+"<p>"+terapia_farmacologica+"</p>";    
    output(testo_output);
}
function output(testo_output){    
    if ($("#output").is(":hidden")) {
        $("#output").show(200);
        $("#output").html(testo_output);
    } else {
        $("#output").fadeOut(100);
        $("#output").html(testo_output);
        $("#output").fadeIn(100);
    }
    scrolla("#output");
}
function scrolla(vai){
    $('html, body').animate({
        scrollTop: $(vai).offset().top
    });
}
$(document).on('pageinit','#tabelle' ,function () {
    mostra_tab_e_img();    
    $("#tabelle input:radio").change(mostra_tab_e_img);
});
function mostra_tab_e_img(){
    sesso=$("input:radio[name='sesso_tab']:checked").val();
    eta=$("input:radio[name='eta']:checked").val();
    prima_riga=(eta*4)-4;
    
    //tabelle
    $(".pressioni_m").fadeOut(100);
    $(".pressioni_f").fadeOut(100);
    $(".pressioni_"+sesso).fadeIn(400);
    
    tabella=$(".pressioni_"+sesso+" thead").next("tbody");
    $(tabella).children("tr").hide();
    $(tabella).children("tr").slice(prima_riga,prima_riga+4).fadeIn(400);
    
    //immagini
    $(".curve_m_p").fadeOut(100);
    $(".curve_m_g").fadeOut(100);
    $(".curve_f_p").fadeOut(100);
    $(".curve_f_g").fadeOut(100);
    if (sesso=="m") {
        let_sesso="i";
    } else {
        let_sesso="e";
    }
    if (eta>3) {
        rif_eta="g";
        let_eta="maggiore di";
    } else {
        rif_eta="p";
        let_eta="inferiore a";
    }
    $(".titolo_tabelle").html("Tavola dei percentili della pressione arteriosa per bambin"+let_sesso+" e adolescenti");
    $(".titolo_curve").html("Curve di crescita per bambin"+let_sesso+" di età "+let_eta+" 36 mesi");
    $(".curve_"+sesso+"_"+rif_eta).fadeIn(400);
}
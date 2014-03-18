function pulsanti(){
    //Pulsanti calcola in generale
    $(".calcola").mousedown(function() {$(this).css("background-color","#E2E2E2").css("color","white")});
    $(".calcola").mouseup(function() {$(this).css("background-color","gray").css("color","white")});
}

//PER LA PAGINA SUL CALCOLO DEL BMI
$(".pag_BMI").ready(function() {
    pulsanti()
    //Funzione per l'uso del tasto "invio"
    $(".dati_input").keypress(function(e){
        if(e.keyCode == 13){
            //controlla();
            return false;
        }
    });
    //Seleziona tutto il campo in caso di click
    $(".dati_input").click(function(){
        if (this.firstChild.length>0) {            
            deseleziona();
            if (window.getSelection){
                var selectionRange = window.getSelection();  
                var range = document.createRange();
                range.selectNode(this.firstChild);
                window.getSelection().addRange(range);
            } else if (document.selection){
                var range = document.body.createTextRange();
                range.moveToElementText(this.firstChild);
                range.select();
            }
        }
    });
});
function calcola_BMI(){
    testo_output="";
    $("#peso").text($("#peso").text().replace(/\n/g,'')); 
    $("#altezza").text($("#altezza").text().replace(/\n/g,'')); 
    $("#peso").text($("#peso").text().replace(',','.')); 
    $("#altezza").text($("#altezza").text().replace(',','.'));  
    peso=$('#peso').html();
    altezza=$('#altezza').html(); 
    if ((peso=="")||(isNaN(peso))||(peso<0.1)||(peso>200)){
       testo_output = "Peso non valido";
    }
    if ((altezza=="")||(isNaN(altezza))||(altezza<0.1)||(altezza>2)){
        if (testo_output!=""){
            testo_output = "Peso e altezza non validi";
        } else {
            testo_output = "Altezza non valida";
        }
    }
    if (testo_output!=""){
        output(testo_output)
    } else {
        BMI=(Math.round(peso*10/(altezza*altezza)))/10;
        output("BMI = "+BMI);
    }
}
function deseleziona(){
    if (document.selection) document.selection.empty(); 
    else if (window.getSelection)
    window.getSelection().removeAllRanges();
}

//PER APPENDICE
$(".appendice").ready(function() {
    pulsanti()
    
    //Nascondo i <tr> nelle tabelle della pagina dell'appendice
    prima_riga=0
    nascondi_righe("table.pressioni_m tbody",prima_riga);
    nascondi_righe("table.pressioni_f tbody",prima_riga);
    $("table.pressioni_m").find(".calcola").first().css("background-color","#2D5C93");
    $("table.pressioni_f").find(".calcola").first().css("background-color","#2D5C93");
    
    //Inizializzo le immagini delle curve
    $("#img_1").fadeOut(500);
    $("#img_2").fadeOut(500);
    $("#img_3").fadeOut(500);
    $("#img_4").fadeOut(500);    
    
    //Azioni pulsanti
    $(".calcola").click(function() {
        indice=$(this).html();
            //questo pulsante blu
            $(this).parent().children(".calcola").css("background-color","gray")
            $(this).css("background-color","#2D5C93")
            //Caso dei pulsanti usati che contengono numeri (ossia le due tabelle)
            if (isNaN(indice)==false) {
                prima_riga=(indice*4)-4;
                //tutti i pulsanti dello stesso livello grigi
                $(this).css("background-color","#2D5C93")
                tabella=$(this).closest("thead").next("tbody");
                nascondi_righe(tabella,prima_riga);
            }
            //Caso dei pulsanti delle immagini
            else {
                contenuto=$(this).html();
                if (contenuto=="Maschi") {
                     sel_ses = "m";
                } else if (contenuto=="Femmine") {
                     sel_ses = "f";
                } else if (contenuto=="Meno di 36 mesi") {
                     sel_eta = "a";
                } else {
                     sel_eta = "b";
                }
                aggiorna_img_curve(sel_ses,sel_eta)
            }
        }
    );
});
function nascondi_righe(tabella,prima_riga){
    $(tabella).children("tr").hide();
    $(tabella).children("tr").slice(prima_riga,prima_riga+4).fadeIn(600);
}

function mostra_immagine(immagine) {    
    //if(immagine.is(":hidden")){
        immagine.attr("width", "100%") 
        immagine.fadeIn(500);        
    //}    
}
function nascondi_immagine(immagine) { 
    //if(immagine.is(":visible")){
        immagine.css("display", "none") 
        immagine.attr("width", "10%") 
    //}
}
function aggiorna_img_curve(){
    sel_fin=sel_ses+sel_eta;    
    if (sel_fin=="ma") {
        nascondi_immagine($("#img_2"))
        nascondi_immagine($("#img_3"))
        nascondi_immagine($("#img_4"))
        mostra_immagine($("#img_1"))
    } else if (sel_fin=="mb") {
        nascondi_immagine($("#img_1"))
        nascondi_immagine($("#img_3"))
        nascondi_immagine($("#img_4"))
        mostra_immagine($("#img_2"))
    } else if (sel_fin=="fa") {
        nascondi_immagine($("#img_1"))
        nascondi_immagine($("#img_2"))
        nascondi_immagine($("#img_4"))
        mostra_immagine($("#img_3"))
    } else if (sel_fin=="fb"){
        nascondi_immagine($("#img_1"))
        nascondi_immagine($("#img_2"))
        nascondi_immagine($("#img_3"))
        mostra_immagine($("#img_4"))
    }
    
    //img="<img src='../Images/img_0"+val_img+"_opt.jpeg' />" 
    //$(".img_curve").html(img);
}

//PER CALCOLO PERCENTILI
$(".calcolo_perc").ready(function() {
    pulsanti()
    //Nascondo il box dell'output nella pagina del modello
    $(".output").hide();
    
    var d = new Date();
    giorno = d.getDate();
    mese = d.getMonth();
    mese=mese+1;
    anno = d.getFullYear();
    
    //Preparo la lista dei mesi (tenendo selezionato il mese attuale)
    lista_mesi=new Array("Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre")
    menu_mese="<select id='mese_nascita'>";
    for (i=0;i<12;i++){
        selezionato="";
        if (i==mese-1){
            selezionato=" selected='selected'";
        }
        menu_mese= menu_mese+"<option value='"+i+"' "+selezionato+">"+lista_mesi[i]+"</option>\n";
    }
    menu_mese= menu_mese+"</select>";
    $("div#mese").html(menu_mese)
    
     //Preparo la lista degli anni
    menu_anno="<select id='anno_nascita'>";
    for (i=anno-20;i<anno+1;i++){
        menu_anno= menu_anno+"<option>"+i+"</option>";
    }
    menu_anno= menu_anno+"</select>";
    $("div#anno").html(menu_anno)
});
function controlla(){
    testo_output="";
    $("#altezza").text($("#altezza").text().replace(/\n/g,'')); 
    $("#PAS").text($("#PAS").text().replace(/\n/g,'')); 
    $("#PAD").text($("#PAD").text().replace(/\n/g,''));
    $("#altezza").text($("#altezza").text().replace(',','.')); 
    $("#PAS").text($("#PAS").text().replace(',','.')); 
    $("#PAD").text($("#PAD").text().replace(',','.'));  
    altezza=$('#altezza').html();    
    PAS=$('#PAS').html();
    PAD=$('#PAD').html();
    mese_nascita=Number(document.getElementById("mese_nascita").options[document.getElementById("mese_nascita").selectedIndex].value);
    anno_nascita=Number(document.getElementById("anno_nascita").options[document.getElementById("anno_nascita").selectedIndex].text);
    eta_mesi=((anno-anno_nascita)*12)+(mese-mese_nascita)-0.5;
    
    if ((altezza=="")||(isNaN(altezza))||(parseInt(altezza)<10)||(altezza>220)){
       testo_output = testo_output+"<p class='emphasis'>Altezza non valida</p>";
    }
    if ((PAS=="")||(isNaN(PAS))||(parseInt(PAS)<30)||(parseInt(PAS)>200)){
       testo_output = testo_output+"<p class='emphasis'>Pressione sistolica non valida</p>";
    }
    if ((PAD=="")||(isNaN(PAD))||(parseInt(PAD)<30)||(parseInt(PAD)>200)){
        testo_output = testo_output+"<p class='emphasis'>Pressione diastolica non valida</p>";
    }
    if (eta_mesi<0.5) {
        testo_output = testo_output+"<p class='emphasis'>Età non valida</p>";
    }
    if (eta_mesi==240.5){
        eta_mesi=240;
    }
    if (eta_mesi>240.5){
        testo_output = testo_output+"<p class='emphasis'>Il modello non è valido per età superiori ai 20 anni</p>";
    }
    if (testo_output!=""){
        output(testo_output)
    } else{
        calcola()
    }
}
function calcola(){
    elementi_sesso = document.getElementsByName("sesso");
    for (i=0; i<elementi_sesso.length; i++){
        if (elementi_sesso[i].checked==true){
            sesso=elementi_sesso[i].value;
            break;
        }
    }
    altezza=Number(altezza);
    PAS=Number(PAS);
    PAD=Number(PAD);
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
    
    // Creo tabella risultati
    testo_output=testo_output+"<table class='trasparente' style='color:white;'>"    
    testo_output=testo_output+"<tr><td class='titolo' style='border-right:1px solid white;text-align:right'>Et&#224;</td>";
    testo_output=testo_output+"<td>"+risultato_eta+"</td></tr>";    
    testo_output=testo_output+"<tr><td class='titolo' style='border-right:1px solid white;text-align:right'>Pressione<br />sistolica</td>";
    testo_output=testo_output+"<td><b>"+risultato_PAS+"</b></td></tr>";    
    testo_output=testo_output+"<tr><td class='titolo' style='border-right:1px solid white;text-align:right'>Pressione<br />diastolica</td>";
    testo_output=testo_output+"<td><b>"+risultato_PAD+"</b></td></tr>";    
    cella_1a="<td class='titolo' style='border-right:1px solid white;text-align:right'>Classificazione<br />ipertensione</td>";
    cella_2a="<td class='titolo' style='border-right:1px solid white;text-align:right'>Frequenza<br />misurazioni</td>";
    cella_3a="<td class='titolo' style='border-right:1px solid white;text-align:right'>Terapia<br />comportamentale</td>";
    cella_4a="<td class='titolo' style='border-right:1px solid white;text-align:right'>Terapia<br />farmacologica</td>";
    if (classificazione==1){
        cella_1b="<td>Normale</td>";
        cella_2b="<td>A tutti i controlli clinici</td>";
        cella_3b="<td>Dieta, sonno, attivit&#224; fisica</td>";
        cella_4b="<td>-</td>";
    } else if (classificazione==2){
        cella_1b="<td>Pre-ipertenzione</td>";
        cella_2b="<td>Ogni 6 mesi</td>";
        cella_3b="<td>Controllo peso: se sovrappeso attivit&#224; fisica e dieta</td>";
        cella_4b="<td>Nulla in assenza di nefropatia cronica, diabete mellito, scompenso cardiaco, ipertrofia ventricolo sinistro</td>";
   
    } else if (classificazione==3){
        cella_1b="<td>Ipertensione di I grado</td>";
        cella_2b="<td>Ricontrollo dopo 1-2 settimane o prima se sistematico. Se elevato in altre 2 occasioni controllo con attenzione dopo un mese</td>";
        cella_3b="<td>Controllo peso: se sovrappeso attivit&#224; fisica e dieta</td>";
        cella_4b="<td>Terapia se condizioni di rischio</td>";
    } else if (classificazione==4){
        cella_1b="<td>Ipertensione di II grado</td>";
        cella_2b="<td>Valutare o inviare a un centro specializzato entro 1 settimana o subito se paziente sintomatico</td>";
        cella_3b="<td>Controllo peso: se sovrappeso attivit&#224; fisica e dieta</td>";
        cella_4b="<td>Iniziare terapia</td>";
    }    
    testo_output=testo_output+"<tr>"+cella_1a;
    testo_output=testo_output+cella_1b+"</tr>";    
    testo_output=testo_output+"<tr>"+cella_2a;
    testo_output=testo_output+cella_2b+"</tr>";    
    testo_output=testo_output+"<tr>"+cella_3a;
    testo_output=testo_output+cella_3b+"</tr>";    
    testo_output=testo_output+"<tr>"+cella_4a;
    testo_output=testo_output+cella_4b+"</tr>";     
    testo_output=testo_output+"</table>";
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
}
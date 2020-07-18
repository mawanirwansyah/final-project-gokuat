let name = [];
let comment = [];

function onSubmitPesan(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let pesan = document.getElementById('pesan').value;

    
        name.unshift(nama);
        comment.unshift(pesan);

        let data = '';
        //let dataComment = '';

        for (let i = 0 ; i < name.length ; i++) {
            data += '<b style="color: #00CED1;">' + name[i] + '</b><br>' ;
            data += '<b>Comment : </b><br>' + comment[i] + '<br><hr>';
        }

         document.getElementById("tampil").innerHTML = data;

        
    }

function validasi() {
		var nama = document.getElementById("nama").value;
		var email = document.getElementById("email").value;
        var subjek = document.getElementById("subjek").value;
        var pesan = document.getElementById("pesan").value;
		if (nama !="" && email!=="" && subjek !="" && pesan !="") {
           alert(`Terima kasih ${nama} Telah Berkunjung di Website kami`);
        }  
        else
        {
            alert("Form tidak Boleh ada yang kosong!");
     
        }
        return (true);
}
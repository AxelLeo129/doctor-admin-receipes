<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

    <tr>
        <td style="background-color: #EDEDED">
            <div style="color: #000000; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                <table>
                    <tr>
                        {{-- <td style="background-color: #EDEDED; text-align: left; width: 350px;">
                            <img width="30%" src="data:image/png;base64,{{(base64_encode($request->img))}}">
                        </td> --}}
                        <td>
                            <div align="right">
                                <h3 style="color: #000000; margin: 0 0 7px"><strong>Receta</strong></h3>
                                <p style="margin: 2px; font-size: 15px">Receta No. {{$request->no}}</p>
                                <p style="margin: 5px; font-size: 15px">Fecha Receta</p>
                                <p style="margin: 2px; font-size: 10px">{{$request->fecha}}</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <br>
                <table>
                    <tr>
                        <td style="width: 260px;">
                            <p style="margin: 2px; font-size: 15px">
                                <h3><strong>Paciente</strong></h3>{{$request->nameP}}<br>Guatemala<br>{{$request->phoneP}}
                            </p>
                        </td>
                        <td>
                            <div align="right">
                                <p style="margin: 2px; font-size: 15px">
                                    {{$request->direccionC}}<br><strong>{{$request->nameD}}</strong><br>{{$request->phoneC}}<br>{{$request->emailD}}<br>{{$request->phoneD}}
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
                <br>
                <table style="font-size: 15px;  margin: 10px">
                    <tbody style="border: gray 2px solid;">
                        @foreach ($request->medicamentos as $item)
                            <tr>
                                <td style="padding: 5px;">{{$item}}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <br>
                <div align="right">
                    <p style="margin: 10px; font-size: 15px">
                        PHARMAZone.app</p>
                </div>
            </div>
        </td>
    </tr>
</table>

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQDNm5Tage8XbOAl-hUIm_J0Vz76F0jE8fG3lhGAMLI1LFjLIsruO9UnbjM3_z_5-p3ZLcgL1-BgW35R3-Yhr4vI_M18_TcXxmm93tpNG8U4FwiHfO3CXIQ1TjMTVUWH331EvuvH0Mwvdb-21wBXaOOfxAvskUCLWw');

    return this.http.get(url, { headers });

  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = '&type=artist') {

    const param = '&offset=0&limit=20' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }

  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

  getAlbum(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }

}

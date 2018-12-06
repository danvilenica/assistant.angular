export class SocialNetworkInfo {
    public id: string;
    public facebook: string;
    public twitter: string;
    public instagram: string;

    constructor($id: string, $facebook: string, $twitter: string, $instagram: string) {
        this.id = $id;
        this.facebook = $facebook;
        this.twitter = $twitter;
        this.instagram = $instagram;
    }
}

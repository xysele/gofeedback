export namespace main {
	
	export class ImageProcessResult {
	    compressedData: string;
	    mimeType: string;
	
	    static createFrom(source: any = {}) {
	        return new ImageProcessResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.compressedData = source["compressedData"];
	        this.mimeType = source["mimeType"];
	    }
	}
	export class UserAnswer {
	    continue: boolean;
	    text?: string;
	    image?: string;
	    mimeType?: string;
	
	    static createFrom(source: any = {}) {
	        return new UserAnswer(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.continue = source["continue"];
	        this.text = source["text"];
	        this.image = source["image"];
	        this.mimeType = source["mimeType"];
	    }
	}

}


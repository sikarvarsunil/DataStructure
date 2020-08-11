(function() {

		function Hashtbl(size) {
			this.buckets = Array(size);
			this.numBucket = this.buckets.length;
		};

		function HashNode(key, value, next) {
			this.key = key;
			this.value = value;
			this.next = next || null;
		}

		Hashtbl.prototype.hash = function(key) {
			let total = 0;

			for(let i = 0; i<key.length; i++) {
				total += key.charCodeAt(i);
			}

			let bucket = total % this.numBucket;
			return bucket;
		}

		Hashtbl.prototype.insert = function(key, value) {

			let index = this.hash(key);
			if(!this.buckets[index]) {
				this.buckets[index] = new HashNode(key, value);
			} else {
				let currentNode = this.buckets[index];
				while(currentNode.next) {
					currentNode = currentNode.next;
				}
				currentNode.next = new HashNode(key, value);
			}

		}

		Hashtbl.prototype.get = function(key) {

			let index = this.hash(key);
			if(!this.buckets[index]) {
				return null
			} else {
				let currentNode = this.buckets[index];
				while(currentNode) {
					if(this.buckets[index] === key) return this.buckets[index].value;
					currentNode = this.buckets[index].next
				}
				return null;
			}

		}

	})()
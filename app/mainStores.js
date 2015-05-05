/*globals __StoreData */

// This file describe where stores read data from and where stores write data to.

import ItemsStore from "items-store/ItemsStore";
import async from "async";
import { readSingleItem, writeAndReadSingleItem, readMultipleItems } from "fetch-helpers/rest";

// a queue that allows only one REST request at a time
// it also defers the requests to next tick, to aggregate multiple changes
var queue = async.queue(function(fn, callback) {
	process.nextTick(function() {
		fn(callback);
	});
}, 1);

// load embedded initial store data from prerendering if available
var initialData = typeof __StoreData === "object" ? __StoreData : {};

// take the store descriptions as base
import desc from "./mainStoresDescriptions";

var stores;

// helper methods to extract embedded data from results

// the stores
stores = module.exports = {
	Router: new ItemsStore(desc.Router)
};



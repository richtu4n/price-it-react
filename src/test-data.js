//example api data

const pricesData = { 'result':{ 'prices':{ 'lower':'51.00','median':'98.00','upper':'170.00' } },'success':true }

const refinementData = { 'result':{ 'features':{ 'Features':{ 'options':[ 'Camera','Email','Touch Screen','Colour Screen','Internet Browsing','Fingerprint Sensor','MP3 Player','MMS (Multimedia Messaging)','Video Calling','FM Radio','Sat Nav','Dual-Lens Camera','4K Video Recording','Accelerometer' ] },'Condition':{ 'options':[ 'Used','New','Manufacturer refurbished','Seller refurbished','For parts or not working','New other (see details)' ] },'Model':{ 'options':[ 'iPhone 5s','iPhone 6','iPhone 5c','iPhone 4s','iPhone 5','iPhone 6s','iPhone 4','iPhone 6 Plus','iPhone 6s Plus','iPhone 3GS','iPhone SE' ] },'Colour':{ 'options':[ 'Silver','Black','Gold','Grey','White','Rose Gold','Blue','Pink','Green','Yellow','Multicoloured' ] },'Brand':{ 'options':[ 'Apple','Unbranded/Generic' ] },'Storage Capacity':{ 'options':[ '16GB','64GB','32GB','8GB','128GB' ] },'Lock Status':{ 'options':[ 'Network Unlocked','Factory Unlocked','Network Locked' ] } } },'success':true }

const suggestionsData = { 'result':{ 'suggestions':[ 'iphone 7','iphone 6 plus','iphone se','iphone 5','iphone 5s','iphone 4s','iphone 4','iphone 6 case','iphone','iphone 5c' ] },'success':true }

export { pricesData, refinementData, suggestionsData }
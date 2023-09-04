//
//  Days.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 25/8/23.
//

import Foundation
import RealmSwift

class Days: Object, ObjectKeyIdentifiable {
    @Persisted(primaryKey: true) var _id: ObjectId

    @Persisted var days = RealmSwift.List<Day>()

    @Persisted var ownerId = ""
}

//
//  Habits.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import Foundation
import RealmSwift

class Habits: Object, ObjectKeyIdentifiable {
    @Persisted(primaryKey: true) var _id: ObjectId

    @Persisted var habits = RealmSwift.List<Habit>()

    @Persisted var ownerId = ""
}

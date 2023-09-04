//
//  Habit.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import Foundation
import RealmSwift

class Habit: Object, ObjectKeyIdentifiable {
    @Persisted(primaryKey: true) var _id: ObjectId

    @Persisted var name = ""
    @Persisted var desc = ""
    @Persisted var done = false

    // backlink
    @Persisted(originProperty: "habits") var group: LinkingObjects<Habits>

    convenience init(name: String = "", desc: String = "", done: Bool = false) {
        self.init()
        self.name = name
        self.desc = desc
        self.done = done
    }

    static func from(_ habit: Habit) -> Habit {
        return Habit(name: habit.name, desc: habit.desc)
    }
}

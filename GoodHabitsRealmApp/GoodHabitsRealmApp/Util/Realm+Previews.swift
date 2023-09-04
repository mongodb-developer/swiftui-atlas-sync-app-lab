//
//  Realm+Previews.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

extension PreviewProvider {
    static func emptyRealmInMemory() -> Realm {
        // configuration for an in-memory Realm
        var conf = Realm.Configuration.defaultConfiguration
        conf.inMemoryIdentifier = "preview"

        // create and return a realm
        let realm = try! Realm(configuration: conf)
        return realm
    }

    static func realmWithData(realm: Realm = emptyRealmInMemory()) -> Realm {
            let existingHabits = realm.objects(Habit.self)

            // if there's no habits (which won't as we're using an empty realm by default) we add a few
            if existingHabits.count == 0 {
                let habits = Habits()

                for i in 0...9 {
                    habits.habits.append(Habit(name: "Habit \(i)", desc: "Description \(i)"))
                }

                try? realm.write({
                    realm.add(habits)
                })
            }

            return realm
        }
}

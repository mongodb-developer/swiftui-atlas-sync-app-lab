//
//  Day.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 25/8/23.
//

import Foundation
import RealmSwift

public class Day: Object, ObjectKeyIdentifiable {
    @Persisted(primaryKey: true) var _id: ObjectId

    @Persisted var date = Date()
    @Persisted var habits = RealmSwift.List<Habit>()

    static func createDayWithHabitsInRealm(realm: Realm) -> Day {
        let day = Day()

        let allHabits = realm.objects(Habits.self)
        if let firstHabitCollection = allHabits.first {
            let habits = firstHabitCollection.habits

            if !habits.isEmpty {
                for habit in habits {
                    day.habits.append(Habit.from(habit))
                }
            }
        }

        return day
    }
}
